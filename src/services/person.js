const RepositoryPerson = require('../repository/person');

const repository = new RepositoryPerson()

class ServicePerson {
    getAll() {
        return repository.getAll()
    }

    get(id) {
        return repository.get(id)
    }

    create(value) {
        return repository.create(value)
    }

    update(id, value) {
        return repository.update(id, value)
    }

    delete(id) {
        return repository.delete(id)
    }
}

module.exports = ServicePerson;