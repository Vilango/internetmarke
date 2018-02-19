const factory = require('../../lib/Address/AddressFactory');

describe('Address Factory', () => {
  it('should create an address', () => {
    const address = factory.create({
      street: 'Marienplatz'
    });

    address.isNamed().should.be.false();
  });

  it('should create a person named address', () => {
    const address = factory.create({
      street: 'Marienplatz',
      company: 'BMW'
    });

    address.isNamed().should.be.true();
    address.getData().should.have.property('name').and.property('companyName');
  });

  it('should create a person named address', () => {
    const address = factory.create({
      street: 'Marienplatz',
      firstname: 'Max',
      lastname: 'Müller'
    });

    address.isNamed().should.be.true();
    address.getData().should.have.property('name').and.property('personName');
  });
});
