import ReducerPost from './postList';
import { getPostToReducer, filterToReducer, getPostDetailsToReducer } from '../actions/index';

const mockStore = {
  posts: [{
    votesCount: 1,
    commentsCount: 1,
    id: 123456,
    username: "joao",
    text: "Oi, seja bem-vindo ao 4eddit"
  },
  {
    votesCount: 2,
    commentsCount: 5,
    id: 654321,
    username: "maria",
    text: "Está é um texto de teste"
  }
  ],
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
  ,
}

describe("Posts Reducer", () => {
  test("GET_POSTS", () => {
    const mockedAction = getPostToReducer(mockStore.posts);
    const newStore = ReducerPost(mockStore, mockedAction);

    expect(newStore.posts).toEqual(mockStore.posts)
  })

  test("POST_DETAILS", () => {
    const mockedAction = getPostDetailsToReducer(mockStore.postDetail);
    const newStore = ReducerPost(mockStore, mockedAction);

    expect(newStore.postDetail).toEqual(mockStore.postDetail)
  })

  test("FILTER", () => {
    const mockValue = "4eddit";
    const mockedAction = filterToReducer(mockValue)
    const newStore = ReducerPost(mockStore, mockedAction)

    expect(newStore.filter).not.toEqual(mockStore.posts)
  })
})