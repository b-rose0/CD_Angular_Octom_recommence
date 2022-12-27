import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent {
  id!: number;

  constructor(private route:ActivatedRoute) {
    this.id = route.snapshot.params['conversationId'];
  }

}
