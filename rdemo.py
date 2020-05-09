import requests

"""
! Before
r = requests.get('https://xkcd.com/353/') 

"""

""" 
    ! Get   payload = {'page': 2, 'count': 25} 
    ! Post  data = {'username': 'Ammet', 'password': 'test123'} 
"""


""" r = requests.get('https://httpbin.org/basic-auth/Usuario/Clave',
                 auth=('Usuario', 'Clave')) """


""" r = requests.get('https://httpbin.org/delay/10', timeout=3)
"""

r = requests.get('https://pokeapi.co/api/v2/pokemon/pikachu')

print(r.text)


""" 
! print(help(r)): Detalle de los métodos
! print(dir(r)):  Listad
! Solo r es el Response

"""


""" 
    with open('comic.png', 'wb') as f:
    f.write(r.content)
"""
