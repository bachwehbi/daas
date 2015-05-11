# Dice as a Service
Dice as a Service - Call the API and get dice values

## API

`/roll` with parameters:

* `s` **type** number: number of sides of a die (default 6)
* `n` **type** number: number of dice to roll (default 3)
* `r` **type** number: number of rolls (default 1)

CURL example

```
  //simple
  curl hostname/roll
  
  //full
  curl hostname/roll?s=6&n=2&r=5
```

## Author
Bachar Wehbi @bachwehbi

## License
MIT
