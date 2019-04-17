import csv
output = open("output.txt", "a")
with open('room-temperatures.csv', 'rt') as f:
    data = []
    for line in f:
        reader = csv.reader(f)

        row_data = line.strip("\n").split(",")
        data.append(row_data)

    json_data = []
f.close()
    
for x in range(1,len(data)):
    print("Parsing data " + str(x))
    existed = False
    for i in range(1, len(json_data)):
        if data[x][1] in json_data[i].values():
            json_data[i]["temperature"][data[x][0]] = float(data[x][2])
            existed = True
            break

            
    if existed == False:   
        new_record = {}
        new_record["timestamp"] = data[x][1]
        new_record["temperature"] = {data[x][0]: float(data[x][2])}
                
        json_data.append(new_record)
    


parse_json_data = str(json_data).replace("\'","\"")
output.write(parse_json_data)
print("DONE!")

output.close()
