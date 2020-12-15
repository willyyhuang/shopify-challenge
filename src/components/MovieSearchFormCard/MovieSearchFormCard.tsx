import React from 'react'
import {
    Card, Form, Input,
    } from 'antd'
    import {SearchOutlined} from '@ant-design/icons'
    import {searchMovie} from '../../services'

const MovieSearchFormCard = ({
    dispatch,
    movies,
}: any) =>
    (
      <Card title='The Shoppies'>
        <Form.Item label='Movie title'>
          <Input
            value={movies.searchValue}
            onChange={(e) => dispatch({type: 'SET_SEARCH_VALUE', payload: e.target.value})}
            onPressEnter={() => {
              searchMovie(movies.searchValue).then((response: any) => {
                  const {data} = response
                  if (data.Response === 'True') {
                    const payload = {
                      Title: data.Title,
                      Year: data.Year,
                    }
                    dispatch({type: 'ADD_RESULT', payload})
                  }
                })
            }}
            suffix={<SearchOutlined />}
            placeholder='search a movie title' />
        </Form.Item>
      </Card>
    )

MovieSearchFormCard.displayName = 'MovieSearchFormCard'
export default MovieSearchFormCard
