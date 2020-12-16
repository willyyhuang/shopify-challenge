import React from 'react'
import {Card, Form, Input} from 'antd'
import {SearchOutlined} from '@ant-design/icons'

type MovieSearchFormCardPropType = {
  setSearchValue: (value: string) => void,
  search: () => void,
  searchValue: string,
}

const MovieSearchFormCard = ({
  setSearchValue,
  search,
  searchValue,
}: MovieSearchFormCardPropType) =>
    (
      <Card title='The Shoppies'>
        <Form.Item label='Movie title'>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onPressEnter={() => search()}
            suffix={<SearchOutlined />}
            placeholder='search a movie title' />
        </Form.Item>
      </Card>
    )

MovieSearchFormCard.displayName = 'MovieSearchFormCard'
export default MovieSearchFormCard
