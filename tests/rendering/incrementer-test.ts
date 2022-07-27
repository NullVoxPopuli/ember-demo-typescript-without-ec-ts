import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Rendering', function (hooks) {
  setupRenderingTest(hooks);

  test('increments', async function (assert) {
    await render(hbs`
      <Incrementer as |count|>
        <out>{{count}}</out>
      </Incrementer>
    `);

    assert.dom('out').hasText('0');

    await click('button');
    assert.dom('out').hasText('1');
  });
});

