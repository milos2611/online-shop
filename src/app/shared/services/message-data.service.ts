import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class MessageService {

    messageChanged = new Subject<string>();

    messages: string[] = [];

    add(message: string) {
   //   this.messages.push(message);
      this.messageChanged.next(message);

    }
}