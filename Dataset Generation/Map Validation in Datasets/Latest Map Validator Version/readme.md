We primaly use this validator to validate large amount of data ( used for validation in datasets created by python scripts) in here
we do both validation and creating a dataset which has only correct maps 
here we give the input to the validator as jsonl file and from that this new validator validate each dataset by 18 line by 18 if there is a one faulty maps is tha18 dataset whole 18 dataset is removed ( 18 line = i set ) so to run first open this folder in integrated terminal and run this in th terminal

python validator2.py maps.jsonl

so it will automaticaly validate all the lines in the maps.jsonl and writh correct batches only to the noerror.jsonl file and we can use data from jsonl file to finetune models this is the way we created datasets after validation our dataset had 100% corrected data 

![Uploading Screenshot 2025-08-29 202843.png…]()
