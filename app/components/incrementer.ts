import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface Signature {
  Element: HTMLDivElement;
  Blocks: {
    default: [number];
  };
}

export default class Incrementer extends Component<Signature> {
  @tracked count = 0;

  @action increment() {
    this.count++;
  }
}

