/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    web: [{
        type: 'autogenerated',
        dirName: 'web',
    }],
    comms: [{
        type: 'autogenerated',
        dirName: 'comms',
    }],
    overview: [{
        type: 'autogenerated',
        dirName: 'overview',
    }],
    source_management: [{
        type: 'autogenerated',
        dirName: 'source_management',
    }],
    iam: [{
        type: 'autogenerated',
        dirName: 'iam',
    }],
    rnr: [{
        type: 'autogenerated',
        dirName: 'rnr'
    }]
};

module.exports = sidebars;