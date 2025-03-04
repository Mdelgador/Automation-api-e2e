describe('AirPortGap API', () => {

	it('GET general', () => {
		cy.request({
			method: 'GET',
			url: 'https://airportgap.com/api/airports'
			
		}).as('GeneralGET')
		cy.get('@GeneralGET').its('status').should('equal', 200)
	})

	it('POST fav airport', () => {
		cy.request({
			method: 'POST',
			url: 'https://airportgap.com/api/favorites',
			auth: {
				'bearer': 'DqtDtrmPmDxDTwcdYvtYdh5b'
			},
			body: {
				 airport_id: 'YBL',
    			 note: 'CAMBELL RIVER AIRPORT'
			}
		}).as('PostFavAirPort')
		cy.get('@PostFavAirPort').its('status').should('equal', 201).then((res) => {
	
		})
	})


})
