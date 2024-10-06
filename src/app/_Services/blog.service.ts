import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../_Model/Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  base_URL = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  // public addNewBlog(blog: Blog) {
  //   return this.http.post<Blog>(`${this.base_URL}blog`, blog);
  // }

  public addNewBlog(blog: Blog, imageName:Blob) {

    let formData = new FormData();
    formData.append("image", imageName);
    formData.append("blogData",JSON.stringify(blog));
    return this.http.post(`${this.base_URL}blog`, formData);
  }


  public getAllBlog() {
    return this.http.get(`${this.base_URL}getAllBlog`)
  }

  public getAllBlogByUser() {
    return this.http.get(`${this.base_URL}userBlog`)
  }

  public getBlogByID(id: any) {
    return this.http.get(`${this.base_URL}blog/${id}`)
  }


  public addComment(comment: any, id: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(`${this.base_URL}comment/${id}`, JSON.stringify(comment), { headers });
  }

  public getUser() {
    return this.http.get(this.base_URL + "getUser")
  }

  public getImage(imageName:any){
    const imageAddress = `${this.base_URL}getImage/${imageName}`;

    if(imageName){
      return imageAddress;
    }
    return "";
  }

}
