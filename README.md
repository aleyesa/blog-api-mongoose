# Blog Post Application

[Heroku link endpoint](https://lit-reef-46646.herokuapp.com/api)

# Author methods
## [GET] Get list of authors
### https://lit-reef-46646.herokuapp.com/api/authors

## [POST] Create new author
### https://lit-reef-46646.herokuapp.com/api/authors

## Required Keys:
### firstName: string,
### lastName:  string,
### userName: string

## [PUT] Update author by id
### https://lit-reef-46646.herokuapp.com/api/authors/:id

## [DELETE] Delete author by id and its related posts
### https://lit-reef-46646.herokuapp.com/api/authors/:id

# Blog Posts methods
## [GET] Get list of blog posts
### https://lit-reef-46646.herokuapp.com/api/posts

## [GET] Get post by post id
### https://lit-reef-46646.herokuapp.com/api/posts/:id

## [POST] Create  new post
### https://lit-reef-46646.herokuapp.com/api/posts
## required keys: 
### title: string,
### content: string,
### author_id: string

## [PUT] Update post by id
### https://lit-reef-46646.herokuapp.com/api/posts/:id

## [DELETE] Delete post by id 
### https://lit-reef-46646.herokuapp.com/api/posts/id
