import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments/primenum')
export class PrimenumController {
    @Get(":num")
    identifyNum(@Param('num') num:any ){
        if (num <= 1)
            return "<p>{ <br> &nbsp;&nbsp;&nbsp;&nbsp;" + '"isPrime":' + false +"<br>}</p>";

        for (let i = 2; i <= Math.sqrt(num); i++)
        {
            if (num % i == 0)
                return "<p>{ <br> &nbsp;&nbsp;&nbsp;&nbsp;" + '"isPrime":' + false +"<br>}</p>";
        }

        return "<p>{ <br> &nbsp;&nbsp;&nbsp;&nbsp;" + '"isPrime":' + true +"<br>}</p>";
    }
}
