import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';
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

setComponentTemplate(
  hbs`
  <div ...attributes>
    <button type="button" {{on 'click' this.increment}}>increment</button>
    {{yield this.count}}
  </div>
`,
  Incrementer
);
