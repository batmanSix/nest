import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

// 帖子控制器
// 接口类型约束
class createDto {
  @ApiProperty({description:'帖子标题'})
  title: string

  @ApiProperty({description:'帖子内容'})
  content: string
}


// @Body() 参数装饰器
@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '展示博客列表' })
  index(): number[] {
    return [1, 2, 3, 4, 5]
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  create(@Body() body: createDto): object {
    return body
  }

  @Get(':id')
  @ApiOperation({ summary: '博客详情' })
  detail(@Param('id') id:string) {
    return [{
      id: id,
      content: '测试问题'
    }]
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  update(@Param('id') id:string, @Body() body:createDto):object {
    return {
      success: true
    }
  }


  @Delete('id')
  @ApiOperation({ summary: '删除帖子' })
  delete(@Param('id') id:string):object {
    return {
      success: true
    }
  }

}
