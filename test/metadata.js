'use strict';

const { assert } = require('chai');
const manifest = require('../package.json');

suite('Metadata Tests', () => {
  test('Should have correct name', () => {
    assert.deepEqual(manifest.name, 'gamedev-pack');
  });

  test('Should have the correct display name', () => {
    assert.deepEqual(manifest.displayName, 'Game Dev Extension Pack');
  });

  test('Should have the correct publisher', () => {
    assert.deepEqual(manifest.publisher, 'MechanicalFlower');
  });

  test('Should have correct extension categories', () => {
    assert.isTrue(manifest.categories.includes('Extension Packs'));
  });

  test('Should have the correct gallery banner', () => {
    const galleryBanner = manifest.galleryBanner;
    assert.deepEqual(galleryBanner.color.toLowerCase(), '#b7410e');
    assert.deepEqual(galleryBanner.theme, 'dark');
  });

  test('Should have correct VS Code engine', () => {
    assert.deepEqual(manifest.engines.vscode, '^1.0.0');
  });
});
