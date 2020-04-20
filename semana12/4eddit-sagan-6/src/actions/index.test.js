import { getPostToReducer, filterToReducer, getPostDetailsToReducer } from './index';

describe("Get posts, get post details and filter posts", () => {
  test("Get Posts", () => {
    const mockPosts = {
      posts: [{
        votesCount: 1,
        commentsCount: 1,
        id: 123456,
        username: "joao",
        text: "Oi, seja bem-vindo ao 4eddit"
      }]
    }
    const mockedAction = getPostToReducer(mockPosts);

    expect(mockedAction.type).toEqual("GET_POSTS");
    expect(mockedAction.payload.data).toBeDefined();
    expect(mockedAction.payload.data).toEqual(mockPosts);
  })

  test("Filter Posts", () => {
    const mockFilter = "Texto de teste";
    const mockedAction = filterToReducer(mockFilter);

    expect(mockedAction.type).toEqual("FILTER");
    expect(mockedAction.payload.valueFilter).toBeDefined();
    expect(mockedAction.payload.valueFilter).toEqual(mockFilter);
  })

  test("Get post details", () => {
    const mockPost = {
      post: {
        comments: [{
          votesCount: 1,
          userVoteDirection: 1,
          id: 654321,
          username: "fernanda",
          text: "Este e um comentário de teste."
        }],
        votesCount: 1,
        userVoteDirection: 1,
        commentsNumber: 2,
        id: 123456,
        username: 'joao',
        text: "Oi, seja bem-vindo ao 4eddit"
    }
    }
    const mockedAction = getPostDetailsToReducer(mockPost);
    
    expect(mockedAction.type).toEqual("POST_DETAILS");
    expect(mockedAction.payload.data).toBeDefined();
    expect(mockedAction.payload.data).toEqual(mockPost)
  })
})