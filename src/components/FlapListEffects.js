import React from 'react'

class FlapListEffects extends React.Component {
  
  render () {
    console.log('FlapListEffects rendered')
    
    const { effects } = this.props
    console.log(effects)
    return (
      <div>
        {effects.map(e =>
          <div key={e.id}>
            <div>Effect Username / Effect Image</div>
            <div>{e.content}</div>
            {e.effects.length >= 1 && <FlapListEffects effects={e.effects}/>}
          </div>
        )}
      </div>
    )
  }
}

export default FlapListEffects