import {Movie} from "./movie";

export class MovieRepository{
  private movies: Movie[];

  constructor() {
    this.movies = [
      {id:1, title: "film 1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem, dignissimos eaque ipsa iste, itaque iusto magni natus officiis quia repellendus sit voluptates. Debitis labore molestiae saepe similique vel voluptas.\n", imageUrl: "1.jpeg", isPopular:false, datePublished:new Date(1990,10,10)},
      {id:2, title: "film 2", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem, dignissimos eaque ipsa iste, itaque iusto magni natus officiis quia repellendus sit voluptates. Debitis labore molestiae saepe similique vel voluptas.\na", imageUrl: "2.jpeg",isPopular:true, datePublished:new Date(1990,10,10)},
      {id:3, title: "film 3", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem, dignissimos eaque ipsa iste, itaque iusto magni natus officiis quia repellendus sit voluptates. Debitis labore molestiae saepe similique vel voluptas.\n", imageUrl: "3.jpeg",isPopular:false, datePublished:new Date(1990,10,10)},
      {id:4, title: "film 4", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem, dignissimos eaque ipsa iste, itaque iusto magni natus officiis quia repellendus sit voluptates. Debitis labore molestiae saepe similique vel voluptas.\n", imageUrl: "4.jpeg",isPopular:true, datePublished:new Date(1990,10,10)}
    ]
  }

  getMovies(): Movie[] {
    return this.movies;
  }
  getPopularMovies(): Movie[] {
    return this.movies.filter(i=>i.isPopular);
  }

  getMovieById(id : Number):Movie{

    return this.movies.find(i=>i.id==id);
  }
}
