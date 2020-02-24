class Githup {
  constructor() {
    this.client_id = "13cc9e729af97bc5a075";
    this.client_secret = "81106d3e6caa2ff8151f6f9405c59b5e7a8ce567";
    this.repos_count = 5;
    this.repos_sort = "created : asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
    &client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}
    &sort=${this.repos_sort}&client_id=${this.client_id}
    &client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
