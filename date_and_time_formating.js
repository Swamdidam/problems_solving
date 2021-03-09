new Date().toLocaleTimeString(); 

new Date().toLocaleDateString(); 

new Date().toLocaleString();

// adding 4 hours later (use milisec: sec==1000):

new Date(new Date().getTime() + 4*60*60*1000).toLocaleTimeString()
