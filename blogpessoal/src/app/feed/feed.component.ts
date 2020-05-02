import { Postagem } from './../model/Postagem';
import { PostagemService } from './../service/postagem.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listaPostagens: Postagem[]

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private PostagemService: PostagemService) { }

  ngOnInit() {
    this.findallPostagens()
  }

  findallPostagens() {
    this.PostagemService.getAllpostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    })
  }


}
