SELECT 
    address.address, 
    address.postal_code, 
    city.city, 
    country.country
FROM 
    address
INNER JOIN 
    city ON address.city_idcity = city.idcity
INNER JOIN 
    country ON city.country_idcountry = country.idcountry;