### Exercício 6

a)

test("Create Post", async () => {

    const post = {
      id: "001",
      photo: "http",
      description: "Conteúdo",
      created_date: "2020-06-01",
      type: "evento",
      id_user: "504557b2-b42f-4dad-8318-c88956c4390f"
    };

    const feedDatabase = new FeedDatabase();

    await feedDatabase.createPost(post);
    
    let result = await feedDatabase.getPostById(post.id);
    result = {...result, created_date: moment(result.created_date).format("YYYY-MM-DD")};

    expect(result).not.toBe(undefined);
    expect(result).toEqual({
      id: "001",
      photo: "http",
      description: "Conteúdo",
      created_date: "2020-06-01",
      type: "evento",
      id_user: "504557b2-b42f-4dad-8318-c88956c4390f"
    });
  });

b) 

  afterAll(async () => {

    await new FeedDatabase().deletePost("001");
    await BaseDatabase.destroyConnection();

  });