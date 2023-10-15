from locust import HttpUser, task

class HelloWorldUser(HttpUser):
    @task
    def SolicitarPregunta(self):
        self.client.get("http://34.117.46.65/evaluacion/pregunta/solicitar/1")
    
    @task
    def ResponderPregunta(self):
        self.client.post("http://34.117.46.65/evaluacion/pregunta/responder", json={"idEvaluacion": 1, "idPregunta":2,"idRespuesta": 1})