describe('AirPortGap API', () => {

	it('GET general', () => {
		cy.request({
			method: 'GET',
			url: 'https://airportgap.com/api/airports'
		}).as('GeneralGET')
		cy.get('@GeneralGET').then((response) => {
			expect(response.status).to.equal(200)
			expect(response.body).to.have.property('data')
		})
	})

  it('POST generar token', () => {
      cy.request({
          method: 'POST',
          url: 'https://airportgap.com/api/token',
          body: {
              email: 'mdelgador24@gmail.com',
              pasword: '24148149MDer'
          }
      }).then((response) => {
          expect(response.status).to.equal(200)
          const token = response.body.token
          cy.wrap(token).as('authToken')
      })
  })

	it('POST fav airport', () => {
		cy.request({
			method: 'POST',
			url: 'https://airportgap.com/api/favorites',
			auth: {
				'bearer': 'uUkYL2Lbc8PpJWNwo1zdaWez'
			},
			body: {
				airport_id: 'YBL',
				note: 'CAMBELL RIVER AIRPORT'
			}
		}).as('PostFavAirPort')
		cy.get('@PostFavAirPort').then((response) => {
			expect(response.status).to.equal(201)
			expect(response.body).to.have.property('data')
			expect(response.body.data).to.have.property('airport_id', 'YBL')
		})
	})

})