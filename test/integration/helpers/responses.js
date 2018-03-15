const responses = {
  findUser: {
    findUser: [
      {
        uuid: '0',
        firstName: 'John',
        lastName: 'Szwaronek',
        fullName: 'John Szwaronek',
        email: 'john@gmail.com',
        posts: [
          {
            uuid: '90',
            authorUuid: '0',
            body: 'Post 1',
            draft: 0
          }
        ],
        comments: [
          {
            uuid: '10',
            authorUuid: '0',
            postUuid: '90',
            body: 'Comment 1',
            archived: false
          }, {
            uuid: '11',
            authorUuid: '0',
            postUuid: '90',
            body: 'Comment 2',
            archived: false
          }
        ],
        followed_by: [],
        following: [
          {
            followee: {
              uuid: '1',
              fullName: 'Jessica Szwaronek'
            }
          }
        ],
        likes: [
          {
            uuid: '100',
            authorUuid: '0',
            commentUuid: '10',
            author: {
              uuid: '0',
              firstName: 'John',
              lastName: 'Szwaronek',
              fullName: 'John Szwaronek',
              email: 'john@gmail.com'
            },
            comment: {
              uuid: '10',
              authorUuid: '0',
              postUuid: '90',
              body: 'Comment 1',
              archived: false
            }
          }, {
            uuid: '101',
            authorUuid: '0',
            commentUuid: '11',
            author: {
              uuid: '0',
              firstName: 'John',
              lastName: 'Szwaronek',
              fullName: 'John Szwaronek',
              email: 'john@gmail.com'
            },
            comment: {
              uuid: '11',
              authorUuid: '0',
              postUuid: '90',
              body: 'Comment 2',
              archived: false
            }
          }, {
            uuid: '102',
            authorUuid: '0',
            commentUuid: '12',
            author: {
              uuid: '0',
              firstName: 'John',
              lastName: 'Szwaronek',
              fullName: 'John Szwaronek',
              email: 'john@gmail.com'
            },
            comment: {
              uuid: '12',
              authorUuid: '1',
              postUuid: '90',
              body: 'Comment 3',
              archived: false
            }
          }, {
            uuid: '103',
            authorUuid: '0',
            commentUuid: '13',
            author: {
              uuid: '0',
              firstName: 'John',
              lastName: 'Szwaronek',
              fullName: 'John Szwaronek',
              email: 'john@gmail.com'
            },
            comment: {
              uuid: '13',
              authorUuid: '1',
              postUuid: '91',
              body: 'Comment 4',
              archived: false
            }
          }, {
            uuid: '104',
            authorUuid: '0',
            commentUuid: '14',
            author: {
              uuid: '0',
              firstName: 'John',
              lastName: 'Szwaronek',
              fullName: 'John Szwaronek',
              email: 'john@gmail.com'
            },
            comment: {
              uuid: '14',
              authorUuid: '2',
              postUuid: '91',
              body: 'Comment 5',
              archived: false
            }
          }, {
            uuid: '105',
            authorUuid: '0',
            commentUuid: '15',
            author: {
              uuid: '0',
              firstName: 'John',
              lastName: 'Szwaronek',
              fullName: 'John Szwaronek',
              email: 'john@gmail.com'
            },
            comment: {
              uuid: '15',
              authorUuid: '3',
              postUuid: '91',
              body: 'Comment 6',
              archived: true
            }
          }
        ]
      }, {
        uuid: '1',
        firstName: 'Jessica',
        lastName: 'Szwaronek',
        fullName: 'Jessica Szwaronek',
        email: 'jessica@gmail.com',
        posts: [
          {
            uuid: '93',
            authorUuid: '1',
            body: 'Post 4',
            draft: 0
          }, {
            uuid: '94',
            authorUuid: '1',
            body: 'Post 5',
            draft: 0
          }
        ],
        comments: [
          {
            uuid: '12',
            authorUuid: '1',
            postUuid: '90',
            body: 'Comment 3',
            archived: false
          }, {
            uuid: '13',
            authorUuid: '1',
            postUuid: '91',
            body: 'Comment 4',
            archived: false
          }
        ],
        followed_by: [
          {
            follower: {
              uuid: '3',
              fullName: 'Barbara Lewis'
            }
          }, {
            follower: {
              uuid: '2',
              fullName: 'Nick Roussis'
            }
          }, {
            follower: {
              uuid: '0',
              fullName: 'John Szwaronek'
            }
          }
        ],
        following: [
          {
            followee: {
              uuid: '3',
              fullName: 'Barbara Lewis'
            }
          }
        ],
        likes: [
          {
            uuid: '106',
            authorUuid: '1',
            commentUuid: '10',
            author: {
              uuid: '1',
              firstName: 'Jessica',
              lastName: 'Szwaronek',
              fullName: 'Jessica Szwaronek',
              email: 'jessica@gmail.com'
            },
            comment: {
              uuid: '10',
              authorUuid: '0',
              postUuid: '90',
              body: 'Comment 1',
              archived: false
            }
          }, {
            uuid: '107',
            authorUuid: '1',
            commentUuid: '11',
            author: {
              uuid: '1',
              firstName: 'Jessica',
              lastName: 'Szwaronek',
              fullName: 'Jessica Szwaronek',
              email: 'jessica@gmail.com'
            },
            comment: {
              uuid: '11',
              authorUuid: '0',
              postUuid: '90',
              body: 'Comment 2',
              archived: false
            }
          }, {
            uuid: '108',
            authorUuid: '1',
            commentUuid: '12',
            author: {
              uuid: '1',
              firstName: 'Jessica',
              lastName: 'Szwaronek',
              fullName: 'Jessica Szwaronek',
              email: 'jessica@gmail.com'
            },
            comment: {
              uuid: '12',
              authorUuid: '1',
              postUuid: '90',
              body: 'Comment 3',
              archived: false
            }
          }, {
            uuid: '109',
            authorUuid: '1',
            commentUuid: '13',
            author: {
              uuid: '1',
              firstName: 'Jessica',
              lastName: 'Szwaronek',
              fullName: 'Jessica Szwaronek',
              email: 'jessica@gmail.com'
            },
            comment: {
              uuid: '13',
              authorUuid: '1',
              postUuid: '91',
              body: 'Comment 4',
              archived: false
            }
          }, {
            uuid: '110',
            authorUuid: '1',
            commentUuid: '14',
            author: {
              uuid: '1',
              firstName: 'Jessica',
              lastName: 'Szwaronek',
              fullName: 'Jessica Szwaronek',
              email: 'jessica@gmail.com'
            },
            comment: {
              uuid: '14',
              authorUuid: '2',
              postUuid: '91',
              body: 'Comment 5',
              archived: false
            }
          }, {
            uuid: '111',
            authorUuid: '1',
            commentUuid: '15',
            author: {
              uuid: '1',
              firstName: 'Jessica',
              lastName: 'Szwaronek',
              fullName: 'Jessica Szwaronek',
              email: 'jessica@gmail.com'
            },
            comment: {
              uuid: '15',
              authorUuid: '3',
              postUuid: '91',
              body: 'Comment 6',
              archived: true
            }
          }
        ]
      }, {
        uuid: '2',
        firstName: 'Nick',
        lastName: 'Roussis',
        fullName: 'Nick Roussis',
        email: 'nick@gmail.com',
        posts: [],
        comments: [
          {
            uuid: '14',
            authorUuid: '2',
            postUuid: '91',
            body: 'Comment 5',
            archived: false
          }
        ],
        followed_by: [],
        following: [
          {
            followee: {
              uuid: '1',
              fullName: 'Jessica Szwaronek'
            }
          }
        ],
        likes: [
          {
            uuid: '112',
            authorUuid: '2',
            commentUuid: '10',
            author: {
              uuid: '2',
              firstName: 'Nick',
              lastName: 'Roussis',
              fullName: 'Nick Roussis',
              email: 'nick@gmail.com'
            },
            comment: {
              uuid: '10',
              authorUuid: '0',
              postUuid: '90',
              body: 'Comment 1',
              archived: false
            }
          }, {
            uuid: '113',
            authorUuid: '2',
            commentUuid: '11',
            author: {
              uuid: '2',
              firstName: 'Nick',
              lastName: 'Roussis',
              fullName: 'Nick Roussis',
              email: 'nick@gmail.com'
            },
            comment: {
              uuid: '11',
              authorUuid: '0',
              postUuid: '90',
              body: 'Comment 2',
              archived: false
            }
          }, {
            uuid: '114',
            authorUuid: '2',
            commentUuid: '12',
            author: {
              uuid: '2',
              firstName: 'Nick',
              lastName: 'Roussis',
              fullName: 'Nick Roussis',
              email: 'nick@gmail.com'
            },
            comment: {
              uuid: '12',
              authorUuid: '1',
              postUuid: '90',
              body: 'Comment 3',
              archived: false
            }
          }, {
            uuid: '115',
            authorUuid: '2',
            commentUuid: '13',
            author: {
              uuid: '2',
              firstName: 'Nick',
              lastName: 'Roussis',
              fullName: 'Nick Roussis',
              email: 'nick@gmail.com'
            },
            comment: {
              uuid: '13',
              authorUuid: '1',
              postUuid: '91',
              body: 'Comment 4',
              archived: false
            }
          }, {
            uuid: '116',
            authorUuid: '2',
            commentUuid: '14',
            author: {
              uuid: '2',
              firstName: 'Nick',
              lastName: 'Roussis',
              fullName: 'Nick Roussis',
              email: 'nick@gmail.com'
            },
            comment: {
              uuid: '14',
              authorUuid: '2',
              postUuid: '91',
              body: 'Comment 5',
              archived: false
            }
          }, {
            uuid: '117',
            authorUuid: '2',
            commentUuid: '15',
            author: {
              uuid: '2',
              firstName: 'Nick',
              lastName: 'Roussis',
              fullName: 'Nick Roussis',
              email: 'nick@gmail.com'
            },
            comment: {
              uuid: '15',
              authorUuid: '3',
              postUuid: '91',
              body: 'Comment 6',
              archived: true
            }
          }
        ]
      }, {
        uuid: '3',
        firstName: 'Barbara',
        lastName: 'Lewis',
        fullName: 'Barbara Lewis',
        email: 'barbara@gmail.com',
        posts: [
          {
            uuid: '91',
            authorUuid: '3',
            body: 'Post 2',
            draft: 0
          }
        ],
        comments: [
          {
            uuid: '15',
            authorUuid: '3',
            postUuid: '91',
            body: 'Comment 6',
            archived: true
          }
        ],
        followed_by: [
          {
            follower: {
              uuid: '1',
              fullName: 'Jessica Szwaronek'
            }
          }
        ],
        following: [
          {
            followee: {
              uuid: '1',
              fullName: 'Jessica Szwaronek'
            }
          }
        ],
        likes: [
          {
            uuid: '118',
            authorUuid: '3',
            commentUuid: '10',
            author: {
              uuid: '3',
              firstName: 'Barbara',
              lastName: 'Lewis',
              fullName: 'Barbara Lewis',
              email: 'barbara@gmail.com'
            },
            comment: {
              uuid: '10',
              authorUuid: '0',
              postUuid: '90',
              body: 'Comment 1',
              archived: false
            }
          }, {
            uuid: '119',
            authorUuid: '3',
            commentUuid: '11',
            author: {
              uuid: '3',
              firstName: 'Barbara',
              lastName: 'Lewis',
              fullName: 'Barbara Lewis',
              email: 'barbara@gmail.com'
            },
            comment: {
              uuid: '11',
              authorUuid: '0',
              postUuid: '90',
              body: 'Comment 2',
              archived: false
            }
          }, {
            uuid: '120',
            authorUuid: '3',
            commentUuid: '12',
            author: {
              uuid: '3',
              firstName: 'Barbara',
              lastName: 'Lewis',
              fullName: 'Barbara Lewis',
              email: 'barbara@gmail.com'
            },
            comment: {
              uuid: '12',
              authorUuid: '1',
              postUuid: '90',
              body: 'Comment 3',
              archived: false
            }
          }, {
            uuid: '121',
            authorUuid: '3',
            commentUuid: '13',
            author: {
              uuid: '3',
              firstName: 'Barbara',
              lastName: 'Lewis',
              fullName: 'Barbara Lewis',
              email: 'barbara@gmail.com'
            },
            comment: {
              uuid: '13',
              authorUuid: '1',
              postUuid: '91',
              body: 'Comment 4',
              archived: false
            }
          }, {
            uuid: '122',
            authorUuid: '3',
            commentUuid: '14',
            author: {
              uuid: '3',
              firstName: 'Barbara',
              lastName: 'Lewis',
              fullName: 'Barbara Lewis',
              email: 'barbara@gmail.com'
            },
            comment: {
              uuid: '14',
              authorUuid: '2',
              postUuid: '91',
              body: 'Comment 5',
              archived: false
            }
          }, {
            uuid: '123',
            authorUuid: '3',
            commentUuid: '15',
            author: {
              uuid: '3',
              firstName: 'Barbara',
              lastName: 'Lewis',
              fullName: 'Barbara Lewis',
              email: 'barbara@gmail.com'
            },
            comment: {
              uuid: '15',
              authorUuid: '3',
              postUuid: '91',
              body: 'Comment 6',
              archived: true
            }
          }
        ]
      }
    ]
  },

  getUser: {
    getUser: {
      uuid: '1',
      firstName: 'Jessica',
      lastName: 'Szwaronek',
      fullName: 'Jessica Szwaronek',
      email: 'jessica@gmail.com',
      posts: [
        {
          uuid: '93',
          authorUuid: '1',
          body: 'Post 4',
          draft: 0
        }, {
          uuid: '94',
          authorUuid: '1',
          body: 'Post 5',
          draft: 0
        }
      ],
      comments: [
        {
          uuid: '12',
          authorUuid: '1',
          postUuid: '90',
          body: 'Comment 3',
          archived: false
        }, {
          uuid: '13',
          authorUuid: '1',
          postUuid: '91',
          body: 'Comment 4',
          archived: false
        }
      ],
      followed_by: [
        {
          follower: {
            uuid: '3',
            fullName: 'Barbara Lewis'
          }
        }, {
          follower: {
            uuid: '2',
            fullName: 'Nick Roussis'
          }
        }, {
          follower: {
            uuid: '0',
            fullName: 'John Szwaronek'
          }
        }
      ],
      following: [
        {
          followee: {
            uuid: '3',
            fullName: 'Barbara Lewis'
          }
        }
      ],
      likes: [
        {
          uuid: '106',
          authorUuid: '1',
          commentUuid: '10',
          author: {
            uuid: '1',
            firstName: 'Jessica',
            lastName: 'Szwaronek',
            fullName: 'Jessica Szwaronek',
            email: 'jessica@gmail.com'
          },
          comment: {
            uuid: '10',
            authorUuid: '0',
            postUuid: '90',
            body: 'Comment 1',
            archived: false
          }
        }, {
          uuid: '107',
          authorUuid: '1',
          commentUuid: '11',
          author: {
            uuid: '1',
            firstName: 'Jessica',
            lastName: 'Szwaronek',
            fullName: 'Jessica Szwaronek',
            email: 'jessica@gmail.com'
          },
          comment: {
            uuid: '11',
            authorUuid: '0',
            postUuid: '90',
            body: 'Comment 2',
            archived: false
          }
        }, {
          uuid: '108',
          authorUuid: '1',
          commentUuid: '12',
          author: {
            uuid: '1',
            firstName: 'Jessica',
            lastName: 'Szwaronek',
            fullName: 'Jessica Szwaronek',
            email: 'jessica@gmail.com'
          },
          comment: {
            uuid: '12',
            authorUuid: '1',
            postUuid: '90',
            body: 'Comment 3',
            archived: false
          }
        }, {
          uuid: '109',
          authorUuid: '1',
          commentUuid: '13',
          author: {
            uuid: '1',
            firstName: 'Jessica',
            lastName: 'Szwaronek',
            fullName: 'Jessica Szwaronek',
            email: 'jessica@gmail.com'
          },
          comment: {
            uuid: '13',
            authorUuid: '1',
            postUuid: '91',
            body: 'Comment 4',
            archived: false
          }
        }, {
          uuid: '110',
          authorUuid: '1',
          commentUuid: '14',
          author: {
            uuid: '1',
            firstName: 'Jessica',
            lastName: 'Szwaronek',
            fullName: 'Jessica Szwaronek',
            email: 'jessica@gmail.com'
          },
          comment: {
            uuid: '14',
            authorUuid: '2',
            postUuid: '91',
            body: 'Comment 5',
            archived: false
          }
        }, {
          uuid: '111',
          authorUuid: '1',
          commentUuid: '15',
          author: {
            uuid: '1',
            firstName: 'Jessica',
            lastName: 'Szwaronek',
            fullName: 'Jessica Szwaronek',
            email: 'jessica@gmail.com'
          },
          comment: {
            uuid: '15',
            authorUuid: '3',
            postUuid: '91',
            body: 'Comment 6',
            archived: true
          }
        }
      ]
    }
  },

  findComment: {
    findComment: [
      {
        uuid: '10',
        authorUuid: '0',
        postUuid: '90',
        body: 'Comment 1',
        archived: false,
        author: {
          uuid: '0',
          firstName: 'John',
          lastName: 'Szwaronek',
          fullName: 'John Szwaronek',
          email: 'john@gmail.com'
        },
        likes: [
          {
            author: {
              uuid: '0',
              firstName: 'John',
              lastName: 'Szwaronek',
              fullName: 'John Szwaronek',
              email: 'john@gmail.com'
            },
            comment: {
              uuid: '10',
              authorUuid: '0',
              postUuid: '90',
              body: 'Comment 1',
              archived: false
            }
          }, {
            author: {
              uuid: '1',
              firstName: 'Jessica',
              lastName: 'Szwaronek',
              fullName: 'Jessica Szwaronek',
              email: 'jessica@gmail.com'
            },
            comment: {
              uuid: '10',
              authorUuid: '0',
              postUuid: '90',
              body: 'Comment 1',
              archived: false
            }
          }, {
            author: {
              uuid: '2',
              firstName: 'Nick',
              lastName: 'Roussis',
              fullName: 'Nick Roussis',
              email: 'nick@gmail.com'
            },
            comment: {
              uuid: '10',
              authorUuid: '0',
              postUuid: '90',
              body: 'Comment 1',
              archived: false
            }
          }, {
            author: {
              uuid: '3',
              firstName: 'Barbara',
              lastName: 'Lewis',
              fullName: 'Barbara Lewis',
              email: 'barbara@gmail.com'
            },
            comment: {
              uuid: '10',
              authorUuid: '0',
              postUuid: '90',
              body: 'Comment 1',
              archived: false
            }
          }
        ]
      }, {
        uuid: '11',
        authorUuid: '0',
        postUuid: '90',
        body: 'Comment 2',
        archived: false,
        author: {
          uuid: '0',
          firstName: 'John',
          lastName: 'Szwaronek',
          fullName: 'John Szwaronek',
          email: 'john@gmail.com'
        },
        likes: [
          {
            author: {
              uuid: '0',
              firstName: 'John',
              lastName: 'Szwaronek',
              fullName: 'John Szwaronek',
              email: 'john@gmail.com'
            },
            comment: {
              uuid: '11',
              authorUuid: '0',
              postUuid: '90',
              body: 'Comment 2',
              archived: false
            }
          }, {
            author: {
              uuid: '1',
              firstName: 'Jessica',
              lastName: 'Szwaronek',
              fullName: 'Jessica Szwaronek',
              email: 'jessica@gmail.com'
            },
            comment: {
              uuid: '11',
              authorUuid: '0',
              postUuid: '90',
              body: 'Comment 2',
              archived: false
            }
          }, {
            author: {
              uuid: '2',
              firstName: 'Nick',
              lastName: 'Roussis',
              fullName: 'Nick Roussis',
              email: 'nick@gmail.com'
            },
            comment: {
              uuid: '11',
              authorUuid: '0',
              postUuid: '90',
              body: 'Comment 2',
              archived: false
            }
          }, {
            author: {
              uuid: '3',
              firstName: 'Barbara',
              lastName: 'Lewis',
              fullName: 'Barbara Lewis',
              email: 'barbara@gmail.com'
            },
            comment: {
              uuid: '11',
              authorUuid: '0',
              postUuid: '90',
              body: 'Comment 2',
              archived: false
            }
          }
        ]
      }, {
        uuid: '12',
        authorUuid: '1',
        postUuid: '90',
        body: 'Comment 3',
        archived: false,
        author: {
          uuid: '1',
          firstName: 'Jessica',
          lastName: 'Szwaronek',
          fullName: 'Jessica Szwaronek',
          email: 'jessica@gmail.com'
        },
        likes: [
          {
            author: {
              uuid: '0',
              firstName: 'John',
              lastName: 'Szwaronek',
              fullName: 'John Szwaronek',
              email: 'john@gmail.com'
            },
            comment: {
              uuid: '12',
              authorUuid: '1',
              postUuid: '90',
              body: 'Comment 3',
              archived: false
            }
          }, {
            author: {
              uuid: '1',
              firstName: 'Jessica',
              lastName: 'Szwaronek',
              fullName: 'Jessica Szwaronek',
              email: 'jessica@gmail.com'
            },
            comment: {
              uuid: '12',
              authorUuid: '1',
              postUuid: '90',
              body: 'Comment 3',
              archived: false
            }
          }, {
            author: {
              uuid: '2',
              firstName: 'Nick',
              lastName: 'Roussis',
              fullName: 'Nick Roussis',
              email: 'nick@gmail.com'
            },
            comment: {
              uuid: '12',
              authorUuid: '1',
              postUuid: '90',
              body: 'Comment 3',
              archived: false
            }
          }, {
            author: {
              uuid: '3',
              firstName: 'Barbara',
              lastName: 'Lewis',
              fullName: 'Barbara Lewis',
              email: 'barbara@gmail.com'
            },
            comment: {
              uuid: '12',
              authorUuid: '1',
              postUuid: '90',
              body: 'Comment 3',
              archived: false
            }
          }
        ]
      }, {
        uuid: '13',
        authorUuid: '1',
        postUuid: '91',
        body: 'Comment 4',
        archived: false,
        author: {
          uuid: '1',
          firstName: 'Jessica',
          lastName: 'Szwaronek',
          fullName: 'Jessica Szwaronek',
          email: 'jessica@gmail.com'
        },
        likes: [
          {
            author: {
              uuid: '0',
              firstName: 'John',
              lastName: 'Szwaronek',
              fullName: 'John Szwaronek',
              email: 'john@gmail.com'
            },
            comment: {
              uuid: '13',
              authorUuid: '1',
              postUuid: '91',
              body: 'Comment 4',
              archived: false
            }
          }, {
            author: {
              uuid: '1',
              firstName: 'Jessica',
              lastName: 'Szwaronek',
              fullName: 'Jessica Szwaronek',
              email: 'jessica@gmail.com'
            },
            comment: {
              uuid: '13',
              authorUuid: '1',
              postUuid: '91',
              body: 'Comment 4',
              archived: false
            }
          }, {
            author: {
              uuid: '2',
              firstName: 'Nick',
              lastName: 'Roussis',
              fullName: 'Nick Roussis',
              email: 'nick@gmail.com'
            },
            comment: {
              uuid: '13',
              authorUuid: '1',
              postUuid: '91',
              body: 'Comment 4',
              archived: false
            }
          }, {
            author: {
              uuid: '3',
              firstName: 'Barbara',
              lastName: 'Lewis',
              fullName: 'Barbara Lewis',
              email: 'barbara@gmail.com'
            },
            comment: {
              uuid: '13',
              authorUuid: '1',
              postUuid: '91',
              body: 'Comment 4',
              archived: false
            }
          }
        ]
      }, {
        uuid: '14',
        authorUuid: '2',
        postUuid: '91',
        body: 'Comment 5',
        archived: false,
        author: {
          uuid: '2',
          firstName: 'Nick',
          lastName: 'Roussis',
          fullName: 'Nick Roussis',
          email: 'nick@gmail.com'
        },
        likes: [
          {
            author: {
              uuid: '0',
              firstName: 'John',
              lastName: 'Szwaronek',
              fullName: 'John Szwaronek',
              email: 'john@gmail.com'
            },
            comment: {
              uuid: '14',
              authorUuid: '2',
              postUuid: '91',
              body: 'Comment 5',
              archived: false
            }
          }, {
            author: {
              uuid: '1',
              firstName: 'Jessica',
              lastName: 'Szwaronek',
              fullName: 'Jessica Szwaronek',
              email: 'jessica@gmail.com'
            },
            comment: {
              uuid: '14',
              authorUuid: '2',
              postUuid: '91',
              body: 'Comment 5',
              archived: false
            }
          }, {
            author: {
              uuid: '2',
              firstName: 'Nick',
              lastName: 'Roussis',
              fullName: 'Nick Roussis',
              email: 'nick@gmail.com'
            },
            comment: {
              uuid: '14',
              authorUuid: '2',
              postUuid: '91',
              body: 'Comment 5',
              archived: false
            }
          }, {
            author: {
              uuid: '3',
              firstName: 'Barbara',
              lastName: 'Lewis',
              fullName: 'Barbara Lewis',
              email: 'barbara@gmail.com'
            },
            comment: {
              uuid: '14',
              authorUuid: '2',
              postUuid: '91',
              body: 'Comment 5',
              archived: false
            }
          }
        ]
      }, {
        uuid: '15',
        authorUuid: '3',
        postUuid: '91',
        body: 'Comment 6',
        archived: true,
        author: {
          uuid: '3',
          firstName: 'Barbara',
          lastName: 'Lewis',
          fullName: 'Barbara Lewis',
          email: 'barbara@gmail.com'
        },
        likes: [
          {
            author: {
              uuid: '0',
              firstName: 'John',
              lastName: 'Szwaronek',
              fullName: 'John Szwaronek',
              email: 'john@gmail.com'
            },
            comment: {
              uuid: '15',
              authorUuid: '3',
              postUuid: '91',
              body: 'Comment 6',
              archived: true
            }
          }, {
            author: {
              uuid: '1',
              firstName: 'Jessica',
              lastName: 'Szwaronek',
              fullName: 'Jessica Szwaronek',
              email: 'jessica@gmail.com'
            },
            comment: {
              uuid: '15',
              authorUuid: '3',
              postUuid: '91',
              body: 'Comment 6',
              archived: true
            }
          }, {
            author: {
              uuid: '2',
              firstName: 'Nick',
              lastName: 'Roussis',
              fullName: 'Nick Roussis',
              email: 'nick@gmail.com'
            },
            comment: {
              uuid: '15',
              authorUuid: '3',
              postUuid: '91',
              body: 'Comment 6',
              archived: true
            }
          }, {
            author: {
              uuid: '3',
              firstName: 'Barbara',
              lastName: 'Lewis',
              fullName: 'Barbara Lewis',
              email: 'barbara@gmail.com'
            },
            comment: {
              uuid: '15',
              authorUuid: '3',
              postUuid: '91',
              body: 'Comment 6',
              archived: true
            }
          }
        ]
      }
    ]
  },

  getComment: {
    getComment: {
      uuid: '10',
      authorUuid: '0',
      postUuid: '90',
      body: 'Comment 1',
      archived: false,
      author: {
        uuid: '0',
        firstName: 'John',
        lastName: 'Szwaronek',
        fullName: 'John Szwaronek',
        email: 'john@gmail.com'
      },
      likes: [
        {
          author: {
            uuid: '0',
            firstName: 'John',
            lastName: 'Szwaronek',
            fullName: 'John Szwaronek',
            email: 'john@gmail.com'
          },
          comment: {
            uuid: '10',
            authorUuid: '0',
            postUuid: '90',
            body: 'Comment 1',
            archived: false
          }
        }, {
          author: {
            uuid: '1',
            firstName: 'Jessica',
            lastName: 'Szwaronek',
            fullName: 'Jessica Szwaronek',
            email: 'jessica@gmail.com'
          },
          comment: {
            uuid: '10',
            authorUuid: '0',
            postUuid: '90',
            body: 'Comment 1',
            archived: false
          }
        }, {
          author: {
            uuid: '2',
            firstName: 'Nick',
            lastName: 'Roussis',
            fullName: 'Nick Roussis',
            email: 'nick@gmail.com'
          },
          comment: {
            uuid: '10',
            authorUuid: '0',
            postUuid: '90',
            body: 'Comment 1',
            archived: false
          }
        }, {
          author: {
            uuid: '3',
            firstName: 'Barbara',
            lastName: 'Lewis',
            fullName: 'Barbara Lewis',
            email: 'barbara@gmail.com'
          },
          comment: {
            uuid: '10',
            authorUuid: '0',
            postUuid: '90',
            body: 'Comment 1',
            archived: false
          }
        }
      ]
    }
  },

  findPost: {
    findPost: [
      {
        uuid: '90',
        authorUuid: '0',
        body: 'Post 1',
        author: {
          uuid: '0',
          firstName: 'John',
          lastName: 'Szwaronek',
          fullName: 'John Szwaronek',
          email: 'john@gmail.com'
        },
        comments: [
          {
            uuid: '10',
            authorUuid: '0',
            postUuid: '90',
            body: 'Comment 1',
            archived: false
          }, {
            uuid: '11',
            authorUuid: '0',
            postUuid: '90',
            body: 'Comment 2',
            archived: false
          }, {
            uuid: '12',
            authorUuid: '1',
            postUuid: '90',
            body: 'Comment 3',
            archived: false
          }
        ]
      }, {
        uuid: '91',
        authorUuid: '3',
        body: 'Post 2',
        author: {
          uuid: '3',
          firstName: 'Barbara',
          lastName: 'Lewis',
          fullName: 'Barbara Lewis',
          email: 'barbara@gmail.com'
        },
        comments: [
          {
            uuid: '13',
            authorUuid: '1',
            postUuid: '91',
            body: 'Comment 4',
            archived: false
          }, {
            uuid: '14',
            authorUuid: '2',
            postUuid: '91',
            body: 'Comment 5',
            archived: false
          }, {
            uuid: '15',
            authorUuid: '3',
            postUuid: '91',
            body: 'Comment 6',
            archived: true
          }
        ]
      }, {
        uuid: '92',
        authorUuid: '1',
        body: 'Post 3',
        author: {
          uuid: '1',
          firstName: 'Jessica',
          lastName: 'Szwaronek',
          fullName: 'Jessica Szwaronek',
          email: 'jessica@gmail.com'
        },
        comments: []
      }, {
        uuid: '93',
        authorUuid: '1',
        body: 'Post 4',
        author: {
          uuid: '1',
          firstName: 'Jessica',
          lastName: 'Szwaronek',
          fullName: 'Jessica Szwaronek',
          email: 'jessica@gmail.com'
        },
        comments: []
      }, {
        uuid: '94',
        authorUuid: '1',
        body: 'Post 5',
        author: {
          uuid: '1',
          firstName: 'Jessica',
          lastName: 'Szwaronek',
          fullName: 'Jessica Szwaronek',
          email: 'jessica@gmail.com'
        },
        comments: []
      }
    ]
  },

  getPost: {
    getPost: {
      uuid: '90',
      authorUuid: '0',
      body: 'Post 1',
      author: {
        uuid: '0',
        firstName: 'John',
        lastName: 'Szwaronek',
        fullName: 'John Szwaronek',
        email: 'john@gmail.com'
      },
      comments: [
        {
          uuid: '10',
          authorUuid: '0',
          postUuid: '90',
          body: 'Comment 1',
          archived: false
        }, {
          uuid: '11',
          authorUuid: '0',
          postUuid: '90',
          body: 'Comment 2',
          archived: false
        }, {
          uuid: '12',
          authorUuid: '1',
          postUuid: '90',
          body: 'Comment 3',
          archived: false
        }
      ]
    }
  },

  findLike: {
    findLike: [
      {
        uuid: '100',
        authorUuid: '0',
        commentUuid: '10',
        author: {
          uuid: '0',
          firstName: 'John',
          lastName: 'Szwaronek',
          fullName: 'John Szwaronek',
          email: 'john@gmail.com'
        },
        comment: {
          uuid: '10',
          authorUuid: '0',
          postUuid: '90',
          body: 'Comment 1',
          archived: false
        }
      }, {
        uuid: '101',
        authorUuid: '0',
        commentUuid: '11',
        author: {
          uuid: '0',
          firstName: 'John',
          lastName: 'Szwaronek',
          fullName: 'John Szwaronek',
          email: 'john@gmail.com'
        },
        comment: {
          uuid: '11',
          authorUuid: '0',
          postUuid: '90',
          body: 'Comment 2',
          archived: false
        }
      }, {
        uuid: '102',
        authorUuid: '0',
        commentUuid: '12',
        author: {
          uuid: '0',
          firstName: 'John',
          lastName: 'Szwaronek',
          fullName: 'John Szwaronek',
          email: 'john@gmail.com'
        },
        comment: {
          uuid: '12',
          authorUuid: '1',
          postUuid: '90',
          body: 'Comment 3',
          archived: false
        }
      }, {
        uuid: '103',
        authorUuid: '0',
        commentUuid: '13',
        author: {
          uuid: '0',
          firstName: 'John',
          lastName: 'Szwaronek',
          fullName: 'John Szwaronek',
          email: 'john@gmail.com'
        },
        comment: {
          uuid: '13',
          authorUuid: '1',
          postUuid: '91',
          body: 'Comment 4',
          archived: false
        }
      }, {
        uuid: '104',
        authorUuid: '0',
        commentUuid: '14',
        author: {
          uuid: '0',
          firstName: 'John',
          lastName: 'Szwaronek',
          fullName: 'John Szwaronek',
          email: 'john@gmail.com'
        },
        comment: {
          uuid: '14',
          authorUuid: '2',
          postUuid: '91',
          body: 'Comment 5',
          archived: false
        }
      }, {
        uuid: '105',
        authorUuid: '0',
        commentUuid: '15',
        author: {
          uuid: '0',
          firstName: 'John',
          lastName: 'Szwaronek',
          fullName: 'John Szwaronek',
          email: 'john@gmail.com'
        },
        comment: {
          uuid: '15',
          authorUuid: '3',
          postUuid: '91',
          body: 'Comment 6',
          archived: true
        }
      }, {
        uuid: '106',
        authorUuid: '1',
        commentUuid: '10',
        author: {
          uuid: '1',
          firstName: 'Jessica',
          lastName: 'Szwaronek',
          fullName: 'Jessica Szwaronek',
          email: 'jessica@gmail.com'
        },
        comment: {
          uuid: '10',
          authorUuid: '0',
          postUuid: '90',
          body: 'Comment 1',
          archived: false
        }
      }, {
        uuid: '107',
        authorUuid: '1',
        commentUuid: '11',
        author: {
          uuid: '1',
          firstName: 'Jessica',
          lastName: 'Szwaronek',
          fullName: 'Jessica Szwaronek',
          email: 'jessica@gmail.com'
        },
        comment: {
          uuid: '11',
          authorUuid: '0',
          postUuid: '90',
          body: 'Comment 2',
          archived: false
        }
      }, {
        uuid: '108',
        authorUuid: '1',
        commentUuid: '12',
        author: {
          uuid: '1',
          firstName: 'Jessica',
          lastName: 'Szwaronek',
          fullName: 'Jessica Szwaronek',
          email: 'jessica@gmail.com'
        },
        comment: {
          uuid: '12',
          authorUuid: '1',
          postUuid: '90',
          body: 'Comment 3',
          archived: false
        }
      }, {
        uuid: '109',
        authorUuid: '1',
        commentUuid: '13',
        author: {
          uuid: '1',
          firstName: 'Jessica',
          lastName: 'Szwaronek',
          fullName: 'Jessica Szwaronek',
          email: 'jessica@gmail.com'
        },
        comment: {
          uuid: '13',
          authorUuid: '1',
          postUuid: '91',
          body: 'Comment 4',
          archived: false
        }
      }, {
        uuid: '110',
        authorUuid: '1',
        commentUuid: '14',
        author: {
          uuid: '1',
          firstName: 'Jessica',
          lastName: 'Szwaronek',
          fullName: 'Jessica Szwaronek',
          email: 'jessica@gmail.com'
        },
        comment: {
          uuid: '14',
          authorUuid: '2',
          postUuid: '91',
          body: 'Comment 5',
          archived: false
        }
      }, {
        uuid: '111',
        authorUuid: '1',
        commentUuid: '15',
        author: {
          uuid: '1',
          firstName: 'Jessica',
          lastName: 'Szwaronek',
          fullName: 'Jessica Szwaronek',
          email: 'jessica@gmail.com'
        },
        comment: {
          uuid: '15',
          authorUuid: '3',
          postUuid: '91',
          body: 'Comment 6',
          archived: true
        }
      }, {
        uuid: '112',
        authorUuid: '2',
        commentUuid: '10',
        author: {
          uuid: '2',
          firstName: 'Nick',
          lastName: 'Roussis',
          fullName: 'Nick Roussis',
          email: 'nick@gmail.com'
        },
        comment: {
          uuid: '10',
          authorUuid: '0',
          postUuid: '90',
          body: 'Comment 1',
          archived: false
        }
      }, {
        uuid: '113',
        authorUuid: '2',
        commentUuid: '11',
        author: {
          uuid: '2',
          firstName: 'Nick',
          lastName: 'Roussis',
          fullName: 'Nick Roussis',
          email: 'nick@gmail.com'
        },
        comment: {
          uuid: '11',
          authorUuid: '0',
          postUuid: '90',
          body: 'Comment 2',
          archived: false
        }
      }, {
        uuid: '114',
        authorUuid: '2',
        commentUuid: '12',
        author: {
          uuid: '2',
          firstName: 'Nick',
          lastName: 'Roussis',
          fullName: 'Nick Roussis',
          email: 'nick@gmail.com'
        },
        comment: {
          uuid: '12',
          authorUuid: '1',
          postUuid: '90',
          body: 'Comment 3',
          archived: false
        }
      }, {
        uuid: '115',
        authorUuid: '2',
        commentUuid: '13',
        author: {
          uuid: '2',
          firstName: 'Nick',
          lastName: 'Roussis',
          fullName: 'Nick Roussis',
          email: 'nick@gmail.com'
        },
        comment: {
          uuid: '13',
          authorUuid: '1',
          postUuid: '91',
          body: 'Comment 4',
          archived: false
        }
      }, {
        uuid: '116',
        authorUuid: '2',
        commentUuid: '14',
        author: {
          uuid: '2',
          firstName: 'Nick',
          lastName: 'Roussis',
          fullName: 'Nick Roussis',
          email: 'nick@gmail.com'
        },
        comment: {
          uuid: '14',
          authorUuid: '2',
          postUuid: '91',
          body: 'Comment 5',
          archived: false
        }
      }, {
        uuid: '117',
        authorUuid: '2',
        commentUuid: '15',
        author: {
          uuid: '2',
          firstName: 'Nick',
          lastName: 'Roussis',
          fullName: 'Nick Roussis',
          email: 'nick@gmail.com'
        },
        comment: {
          uuid: '15',
          authorUuid: '3',
          postUuid: '91',
          body: 'Comment 6',
          archived: true
        }
      }, {
        uuid: '118',
        authorUuid: '3',
        commentUuid: '10',
        author: {
          uuid: '3',
          firstName: 'Barbara',
          lastName: 'Lewis',
          fullName: 'Barbara Lewis',
          email: 'barbara@gmail.com'
        },
        comment: {
          uuid: '10',
          authorUuid: '0',
          postUuid: '90',
          body: 'Comment 1',
          archived: false
        }
      }, {
        uuid: '119',
        authorUuid: '3',
        commentUuid: '11',
        author: {
          uuid: '3',
          firstName: 'Barbara',
          lastName: 'Lewis',
          fullName: 'Barbara Lewis',
          email: 'barbara@gmail.com'
        },
        comment: {
          uuid: '11',
          authorUuid: '0',
          postUuid: '90',
          body: 'Comment 2',
          archived: false
        }
      }, {
        uuid: '120',
        authorUuid: '3',
        commentUuid: '12',
        author: {
          uuid: '3',
          firstName: 'Barbara',
          lastName: 'Lewis',
          fullName: 'Barbara Lewis',
          email: 'barbara@gmail.com'
        },
        comment: {
          uuid: '12',
          authorUuid: '1',
          postUuid: '90',
          body: 'Comment 3',
          archived: false
        }
      }, {
        uuid: '121',
        authorUuid: '3',
        commentUuid: '13',
        author: {
          uuid: '3',
          firstName: 'Barbara',
          lastName: 'Lewis',
          fullName: 'Barbara Lewis',
          email: 'barbara@gmail.com'
        },
        comment: {
          uuid: '13',
          authorUuid: '1',
          postUuid: '91',
          body: 'Comment 4',
          archived: false
        }
      }, {
        uuid: '122',
        authorUuid: '3',
        commentUuid: '14',
        author: {
          uuid: '3',
          firstName: 'Barbara',
          lastName: 'Lewis',
          fullName: 'Barbara Lewis',
          email: 'barbara@gmail.com'
        },
        comment: {
          uuid: '14',
          authorUuid: '2',
          postUuid: '91',
          body: 'Comment 5',
          archived: false
        }
      }, {
        uuid: '123',
        authorUuid: '3',
        commentUuid: '15',
        author: {
          uuid: '3',
          firstName: 'Barbara',
          lastName: 'Lewis',
          fullName: 'Barbara Lewis',
          email: 'barbara@gmail.com'
        },
        comment: {
          uuid: '15',
          authorUuid: '3',
          postUuid: '91',
          body: 'Comment 6',
          archived: true
        }
      }
    ]
  },

  getLike: {
    getLike: {
      uuid: '100',
      authorUuid: '0',
      commentUuid: '10',
      author: {
        uuid: '0',
        firstName: 'John',
        lastName: 'Szwaronek',
        fullName: 'John Szwaronek',
        email: 'john@gmail.com'
      },
      comment: {
        uuid: '10',
        authorUuid: '0',
        postUuid: '90',
        body: 'Comment 1',
        archived: false
      }
    }
  },

  findRelationship: {
    findRelationship: [
      {
        uuid: '80',
        followerUuid: '0',
        followeeUuid: '1',
        follower: {
          uuid: '0',
          email: 'john@gmail.com',
          firstName: 'John',
          lastName: 'Szwaronek',
          fullName: 'John Szwaronek'
        },
        followee: {
          uuid: '1',
          email: 'jessica@gmail.com',
          firstName: 'Jessica',
          lastName: 'Szwaronek',
          fullName: 'Jessica Szwaronek'
        }
      }, {
        uuid: '81',
        followerUuid: '2',
        followeeUuid: '1',
        follower: {
          uuid: '2',
          email: 'nick@gmail.com',
          firstName: 'Nick',
          lastName: 'Roussis',
          fullName: 'Nick Roussis'
        },
        followee: {
          uuid: '1',
          email: 'jessica@gmail.com',
          firstName: 'Jessica',
          lastName: 'Szwaronek',
          fullName: 'Jessica Szwaronek'
        }
      }, {
        uuid: '82',
        followerUuid: '3',
        followeeUuid: '1',
        follower: {
          uuid: '3',
          email: 'barbara@gmail.com',
          firstName: 'Barbara',
          lastName: 'Lewis',
          fullName: 'Barbara Lewis'
        },
        followee: {
          uuid: '1',
          email: 'jessica@gmail.com',
          firstName: 'Jessica',
          lastName: 'Szwaronek',
          fullName: 'Jessica Szwaronek'
        }
      }, {
        uuid: '83',
        followerUuid: '1',
        followeeUuid: '3',
        follower: {
          uuid: '1',
          email: 'jessica@gmail.com',
          firstName: 'Jessica',
          lastName: 'Szwaronek',
          fullName: 'Jessica Szwaronek'
        },
        followee: {
          uuid: '3',
          email: 'barbara@gmail.com',
          firstName: 'Barbara',
          lastName: 'Lewis',
          fullName: 'Barbara Lewis'
        }
      }
    ]
  },

  getRelationship: {
    getRelationship: {
      uuid: '80',
      followerUuid: '0',
      followeeUuid: '1',
      follower: {
        uuid: '0',
        email: 'john@gmail.com',
        firstName: 'John',
        lastName: 'Szwaronek',
        fullName: 'John Szwaronek'
      },
      followee: {
        uuid: '1',
        email: 'jessica@gmail.com',
        firstName: 'Jessica',
        lastName: 'Szwaronek',
        fullName: 'Jessica Szwaronek'
      }
    }
  }
};

module.exports = responses;
