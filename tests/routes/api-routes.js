'use strict';

const { expect } = require('chai');

describe('route-tests', () => {
    it('return correct API versions', (done) => {
        const availableVersions = ['v1'];

        require('../../routes/index.js')()
        .then((versions) => {
            expect(Object.keys(versions).length).to.equal(availableVersions.length);
            availableVersions.map(version => expect(versions[version]).to.equal(true));
            done();
        })
        .catch(err => { done(err); });
    });
});
