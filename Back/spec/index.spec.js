var Request = require('request')

describe("Server", ()=>{
    describe('GET /api',()=>{
        var data={};

        beforeAll((done)=>{
            Request.get('http://localhost:4000/api/pokemons?type=normalny', (error,res,body)=>{
                data.status=res.statusCode;
                data.body=body;
                console.log(data.body);
                done();
            });
        });

        it('has status 200',()=>{
            expect(data.status).toEqual(200);
        })
    });
    describe('bad POST /api',()=>{
        var data={};
        
        beforeAll((done)=>{
            Request.post('http://localhost:4000/api/pokemons',data, (error,res,body)=>{
                data.status=res.statusCode;
                data.body=body;
                console.log(data.body);
                done();
            });
        });
        it('has status 500',()=>{
            expect(data.status).toEqual(422);
        })
    });

    describe('POST /api',()=>{
        var data={
            id: 100 ,
            name: "Char",
            description:"Fire lizard, fire on his tail shows how healthy he is",
            type: "normalny",
            starter: true
            };
        
        beforeAll((done)=>{
            Request.post('http://localhost:4000/api/pokemons',{json: true, body: data}, (error,res,body)=>{
                data.status=res.statusCode;
                data.body=body;
                console.log(data.body);
                done();
            });
        });

        it('has status 200',()=>{
            expect(data.status).toEqual(200);
        })

        describe('Delete',()=>{
            beforeAll((done)=>{
                Request.delete('http://localhost:4000/api/pokemons/'+data.body._id,{json: true, body: data}, (error,res,body)=>{
                    data.status=res.statusCode;
                    data.body=body;
                    console.log(data.body);
                    done();
                });
            });

            it('has status 200',()=>{
                expect(data.status).toEqual(200);
            })
        })
    });
});