var expect = require('chai').expect;

require('./app.js');


    describe('INFINITY', function()
    {
        it('INFINITY === "INFINITY"',
            function()
            {
                expect(INFINITY)
                    .to.equal('INFINITY');
            });
    });