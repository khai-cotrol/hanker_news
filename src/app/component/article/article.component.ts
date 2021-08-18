import { Component, OnInit } from '@angular/core';
import {Article} from "./article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = {};
  articles :Article[] =[
    {
    title:'Tình hình covid cả nước',
    url:'https://suckhoedoisong.vn//trua-17-8-ca-nuoc-da-tiem-hon-153-trieu-lieu-vaccine-covid-19-dong-nai-them-291-ca-mac-moi-16921081712361758.htm'
  },
    {
      title:'Trưa 17/8, Hà Nội thêm 41 ca mắc mới',
      url:'https://kinhtedothi.vn/trua-178-ha-noi-them-41-ca-mac-moi-431431.html'
    },
    {
      title:'Con vịt vàng’ có ý nghĩa gì mà dân tình đồng loạt thay ảnh đại diện?',
      url :'https://vtc.vn/tra-tu-con-vit-vang-co-y-nghia-gi-ma-dan-tinh-dong-loat-thay-anh-dai-dien-ar631219.html'
    },
    {
      title:'Hình ảnh tổ công tác đặc biệt kiểm tra người lưu thông trong nội đô Hà Nội',
      url:'https://tienphong.vn/hinh-anh-to-cong-tac-dac-biet-kiem-tra-nguoi-luu-thong-trong-noi-do-ha-noi-post1366708.tpo'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
  addNewArticle() {
    this.articles.push(this.article);
  }

}
