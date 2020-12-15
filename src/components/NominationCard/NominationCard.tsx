import React from 'react'
import {
Button, Card, Row, Typography,
} from 'antd'

const NominationCard = ({
    removeNomination,
    nomination,
}: any) => {
    if (nomination.length === 0) return null
    return <Card>
      <Typography.Title level={4}>Nominations</Typography.Title>
      {nomination.map((item: any) => <Row style={{marginTop: 5}}>
        <Typography.Text style={{marginTop: 5}}>
          {`${item.Title} - (${item.Year})`}
        </Typography.Text>
        <Button onClick={() => removeNomination(item)} style={{marginLeft: 10}}>Remove</Button>
      </Row>)}
    </Card>
}

NominationCard.displayName = 'NominationCard'
export default NominationCard
