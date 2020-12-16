import {
  Button, Card, Row, Typography,
  } from 'antd'
import React from 'react'
import {MovieType} from '../../views/BasicLayout'

type ResultCardPropType = {
  result: MovieType[],
  addNomination: (payload: MovieType) => void,
}

const ResultCard = ({
    result,
    addNomination,
}: ResultCardPropType) => {
    if (result.length === 0) return null
    return <Card>
      <Typography.Title level={4}>Results</Typography.Title>
      {result.map((item: MovieType) => <Row style={{marginTop: 5}}>
        <Typography.Text style={{marginTop: 5}}>
          {`${item.Title} - (${item.Year})`}
        </Typography.Text>
        <Button onClick={() => addNomination(item)} style={{marginLeft: 10}}>Nominate</Button>
      </Row>)}
    </Card>
}

ResultCard.displayName = 'ResultCard'
export default ResultCard
