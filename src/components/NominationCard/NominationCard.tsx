import {
  Button, Card, Row, Typography,
} from 'antd'
import React from 'react'
import {MovieType} from '../../views/BasicLayout'

type ResultCardPropType = {
  nomination: MovieType[],
  removeNomination: (payload: MovieType) => void,
}

const NominationCard = ({
    removeNomination,
    nomination,
}: ResultCardPropType) => {
    if (nomination.length === 0) return null
    return <Card>
      <Typography.Title level={4}>Nominations</Typography.Title>
      {nomination.map((item: MovieType) => <Row style={{marginTop: 5}}>
        <Typography.Text style={{marginTop: 5}}>
          {`${item.Title} (${item.Year})`}
        </Typography.Text>
        <Button onClick={() => removeNomination(item)} style={{marginLeft: 10}}>Remove</Button>
      </Row>)}
    </Card>
}

NominationCard.displayName = 'NominationCard'
export default NominationCard
