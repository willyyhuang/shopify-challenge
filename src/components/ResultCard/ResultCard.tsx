import {
  Button, Card, Row, Typography,
  } from 'antd'
import React from 'react'
import {MovieType} from '../../views/BasicLayout'

type ResultCardPropType = {
  nomination: MovieType[],
  result: MovieType[],
  addNomination: (payload: MovieType) => void,
}

const ResultCard = ({
    nomination,
    result,
    addNomination,
}: ResultCardPropType) => {
    if (result.length === 0) return null

    const getItemDisabledState = (item: MovieType) => {
      if (nomination.length === 0) return false
      if (nomination.length === 5) return true
      const nominationList = nomination.filter((movie: MovieType) => movie.Title === item.Title)
      if (nominationList.length === 0) return false
      return true
    }

    return <Card>
      <Typography.Title level={4}>Results</Typography.Title>
      {result.map((item: MovieType) => <Row style={{marginTop: 5}}>
        <Typography.Text style={{marginTop: 5}}>
          {`${item.Title} - (${item.Year})`}
        </Typography.Text>
        <Button disabled={getItemDisabledState(item)} onClick={() => addNomination(item)} style={{marginLeft: 10}}>Nominate</Button>
      </Row>)}
    </Card>
}

ResultCard.displayName = 'ResultCard'
export default ResultCard
