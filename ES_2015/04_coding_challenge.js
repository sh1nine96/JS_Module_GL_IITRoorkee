/* Create a map containing the details of a person as a key value pair in it.
Map have firstname,lastname,city,mobilenumber as the key and take some 
demo data as their value to insert that in the map.
Now print all keys once and  values once separately present 
 in the map without using any loop statement. */

 const teacher = new Map([ 
                  ["firstName", "Pramod"],
                  ["lastName", "Singh"],
                  ["city", "Agra"],
                  ["mobileNumber", 9775894312]
 ]);

 console.log(teacher.keys());
 console.log(teacher.values());