                    let cesta = []; 
                    let total = 0; 

                    
                    
                    let frutas = {
                        'Mamão Papaia': 4.75, 
                        'Laranja': 1.99, 
                        'Manga': 3.95,
                        'Melão': 5.75,
                        'Melancia' : 2.19
                    };
                    

                    
                    function addFruta(escolhida)
                    {       
                                           
                        var escolhida = escolhida.textContent;

                        
                        var existeItem = false;
                        
                        
                        for (var i = cesta.length - 1; i >= 0; i--)
                        {
                        
                            if (escolhida == cesta[i])
                            {
                                existeItem = true;
                            } 
                        }

                        
                        if (existeItem)
                        {
                            alert("Item "+escolhida+" já adicionado na cesta");
                        }
                        else
                        {
                            

                            
                            cesta.push(escolhida);
                        
                            
                            document.getElementById("item").innerHTML = cesta;

                            
                            var valorFruta = escolhida.split("$");
                            
                            
                            valorFruta = parseFloat(valorFruta[1]);
                            
                            
                            total += valorFruta;

                        
                            document.getElementById("mostraTotalCompra").value = total.toFixed(2);
                        }                           
                        
                        
                    }
