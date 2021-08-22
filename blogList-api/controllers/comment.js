const commentRouter = require('express').Router()
const Blog = require('../models/blog')
const Comment = require('../models/comment')

commentRouter.get('/:id/comments', async (request, response) => {
  const { id } = request.params

  const blogCommented = await Blog.findById(id).populate('comments')

  response.status(200).json(blogCommented)
})

commentRouter.post('/:id/comments', async (request, response) => {
  const { id } = request.params
  const { content } = request.body

  if (!content) {
    return response.status(400).json({
      error: 'you need to fill in all the fields'
    })
  }

  const blog = await Blog.findById(id)

  if (!blog) {
    return response.status(401).json({
      error: 'no blog exists'
    })
  }

  const comment = new Comment({
    content
  })

  const savedComment = await comment.save()

  blog.comments = blog.comments.concat(savedComment.id)

  await blog.save()

  response.status(201).json(savedComment)
})

module.exports = commentRouter
