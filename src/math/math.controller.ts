import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { MATH_SERVICE } from './math.constants';

@Controller()
export class MathController {
  constructor(@Inject(MATH_SERVICE) private readonly client: ClientProxy) {}

  @Get()
  execute(): Observable<number> {
    const pattern = { cmd: 'sum' };
    const data = [1, 2, 3, 4, 5];
    return this.client.send<number>(pattern, data);
  }

  @MessagePattern({ cmd: 'sum' })
  sum(data: number[]): number {
    console.log(`->sum1`, data)
    return (data || []).reduce((a, b) => a + b);
  }

  @MessagePattern({ cmd: 'sum2' })
  sum2(data: number[]): number {
    console.log(`->sum2`, data)
    return (data || []).reduce((a, b) => a + b);
  }
}
