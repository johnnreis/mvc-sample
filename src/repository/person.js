const fakeDb = new Array('value1', 'value2', 'value3', 'value4')

class RepositoryPerson {
    getAll() { 
        return fakeDb
    }
    get(index) {
        return fakeDb[index]
    }
    create(value) {
        fakeDb.push(value)
    }
    update(index, value) {
        fakeDb[index] = value
    }
    delete(index) {
        fakeDb.splice(index, 1)
    }
}

module.exports = RepositoryPerson