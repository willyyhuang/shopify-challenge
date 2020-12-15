import React from 'react'
import {
Button, Card, Row, Typography,
} from 'antd'

const ResultCard = ({
    result,
    addNomination,
}: any) => {
    if (result.length === 0) return null
    return <Card>
      <Typography.Title level={4}>Results</Typography.Title>
      {result.map((item: any) => <Row style={{marginTop: 5}}>
        <Typography.Text style={{marginTop: 5}}>
          {`${item.Title} - (${item.Year})`}
        </Typography.Text>
        <Button onClick={() => addNomination(item)} style={{marginLeft: 10}}>Nominate</Button>
      </Row>)}
    </Card>
}

ResultCard.displayName = 'ResultCard'
export default ResultCard
