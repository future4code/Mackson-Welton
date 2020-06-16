### Exercício 7

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

    try {
      const feedDatabase = new FeedDatabase();

      await feedDatabase.createPost(post);
      await feedDatabase.createPost(post);

    } catch (err) {
      expect(err).not.toBe(undefined)
    }
  });