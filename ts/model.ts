

export class Blog {
  constructor(public title: string,
              public header: string,
              public posts: Post[]) {
  }
}

export class Post {
  constructor(public id: number,
              public author: Author,
              public title: string,
              public text: string,
              public picUrl: string,
              public tags: string[],
              public date: number) {
  }
}

export class Author {
  constructor(public name: string,
              public description: string,
              public picUrl: string) {
  }
}
