import QUnit from 'steal-qunit';
import plugin from './can-assign';

QUnit.module('can-assign');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the can-assign plugin');
});
