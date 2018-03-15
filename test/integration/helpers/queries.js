function stringify(obj, spacer = ' ', separator = ', ', leader = '{', trailer = '}') {
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return JSON.stringify(obj);
  }

  const str = Object.keys(obj).map(key => `${key}:${spacer}${stringify(obj[key], spacer, separator)}`).join(', ');

  return `${leader}${str}${trailer}`;
}

function qlParams(obj) {
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Expected object. (qlParams)');
  }

  return stringify(obj, undefined, undefined, '', '');
}

const queries = {
  findUser: `{
  findUser(${qlParams({ query: { uuid: { __lt: 100000 } } })}) {
    uuid
    firstName
    lastName
    fullName
    email
    posts(${qlParams({ query: { draft: 0 } })}) {
      uuid
      authorUuid
      body
      draft
    }
    comments {
      uuid
      authorUuid
      postUuid
      body
      archived
    }
    followed_by {
      follower {
        uuid
        fullName
      }
    }
    following {
      followee {
        uuid
        fullName
      }
    }
    likes {
      uuid
      authorUuid
      commentUuid
      author {
        uuid
        firstName
        lastName
        fullName
        email
      }
      comment {
        uuid
        authorUuid
        postUuid
        body
        archived
      }
    }
  }
}`,

  getUser: `{
  getUser(${qlParams({ key: 1 })}) {
    uuid
    firstName
    lastName
    fullName
    email
    posts(${qlParams({ query: { draft: 0 } })}) {
      uuid
      authorUuid
      body
      draft
    }
    comments {
      uuid
      authorUuid
      postUuid
      body
      archived
    }
    followed_by {
      follower {
        uuid
        fullName
      }
    }
    following {
      followee {
        uuid
        fullName
      }
    }
    likes {
      uuid
      authorUuid
      commentUuid
      author {
        uuid
        firstName
        lastName
        fullName
        email
      }
      comment {
        uuid
        authorUuid
        postUuid
        body
        archived
      }
    }
  }
}`,

  findComment: `{
  findComment(${qlParams({ query: { uuid: { __lt: 100000 } } })}) {
    uuid
    authorUuid
    postUuid
    body
    archived
    author {
      uuid
      firstName
      lastName
      fullName
      email
    }
    likes {
      author {
        uuid
        firstName
        lastName
        fullName
        email
      }
      comment {
        uuid
        authorUuid
        postUuid
        body
        archived
      }
    }
  }
}`,

  getComment: `{
  getComment(${qlParams({ key: 10 })}) {
    uuid
    authorUuid
    postUuid
    body
    archived
    author {
      uuid
      firstName
      lastName
      fullName
      email
    }
    likes {
      author {
        uuid
        firstName
        lastName
        fullName
        email
      }
      comment {
        uuid
        authorUuid
        postUuid
        body
        archived
      }
    }
  }
}`,

  findPost: `{
  findPost(${qlParams({ query: { uuid: { __lt: 100000 } } })}) {
    uuid
    authorUuid
    body
    author {
      uuid
      firstName
      lastName
      fullName
      email
    }
    comments {
      uuid
      authorUuid
      postUuid
      body
      archived
    }
  }
}`,

  getPost: `{
  getPost(${qlParams({ key: 90 })}) {
    uuid
    authorUuid
    body
    author {
      uuid
      firstName
      lastName
      fullName
      email
    }
    comments {
      uuid
      authorUuid
      postUuid
      body
      archived
    }
  }
}`,

  findLike: `{
  findLike(${qlParams({ query: { uuid: { __lt: 100000 } } })}) {
    uuid
    authorUuid
    commentUuid
    author {
      uuid
      firstName
      lastName
      fullName
      email
    }
    comment {
      uuid
      authorUuid
      postUuid
      body
      archived
    }
  }
}`,

  getLike: `{
  getLike(${qlParams({ key: 100 })}) {
    uuid
    authorUuid
    commentUuid
    author {
      uuid
      firstName
      lastName
      fullName
      email
    }
    comment {
      uuid
      authorUuid
      postUuid
      body
      archived
    }
  }
}`,

  findRelationship: `{
  findRelationship(${qlParams({ query: { uuid: { __lt: 100000 } } })}) {
    uuid
    followerUuid
    followeeUuid
    follower {
      uuid
      email
      firstName
      lastName
      fullName
    }
    followee {
      uuid
      email
      firstName
      lastName
      fullName
    }
  }
}`,

  getRelationship: `{
  getRelationship(${qlParams({ key: 80 })}) {
    uuid
    followerUuid
    followeeUuid
    follower {
      uuid
      email
      firstName
      lastName
      fullName
    }
    followee {
      uuid
      email
      firstName
      lastName
      fullName
    }
  }
}`
};


module.exports = queries;
