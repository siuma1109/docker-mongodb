// Initializes replica set rs0 with mongo1 as primary and adds mongo2, mongo3
// Safe to re-run: if already initiated, it exits successfully.

function log(message) {
  // eslint-disable-next-line no-console
  print(`[init-replica] ${message}`);
}

try {
  const status = rs.status();
  if (status.ok === 1) {
    log('Replica set already initialized.');
    quit(0);
  }
} catch (e) {
  // not initialized yet
}

const config = {
  _id: 'rs0',
  members: [
    { _id: 0, host: 'mongo1:27017', priority: 2 },
    { _id: 1, host: 'mongo2:27017', priority: 1 },
    { _id: 2, host: 'mongo3:27017', priority: 1 }
  ]
};

log('Initiating replica set...');
const result = rs.initiate(config);
log(JSON.stringify(result));

// Wait until PRIMARY is elected
let attemptsRemaining = 30;
while (attemptsRemaining > 0) {
  try {
    const st = rs.status();
    const primary = st.members.find(m => m.stateStr === 'PRIMARY');
    if (primary) {
      log(`Primary elected: ${primary.name}`);
      break;
    }
  } catch (err) {
    // ignore until ready
  }
  sleep(1000);
  attemptsRemaining -= 1;
}

log('Replica set initialization complete.');

