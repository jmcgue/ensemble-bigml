package dev.jhordycg.examples.java.ensemble.service;

import dev.jhordycg.examples.java.ensemble.model.Cancer;
import dev.jhordycg.examples.java.ensemble.model.Ensemble;
import java.util.HashMap;
import java.util.Map;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 *
 * @author jhordycg
 */
@Service
public class BigMLService {

    private static final String API_KEY = "02bf18c65636c8cb91520c1ca77d56c616602401";
    private static final String USERNAME = "jhordycaceres";

    private static final String API = String.format(
            "https://bigml.io/andromeda/prediction/?username=%s&api_key=%s",
            USERNAME, API_KEY);
    private final RestTemplate template;

    public BigMLService(RestTemplate template) {
        this.template = template;
    }

    public Ensemble getPrediction(Cancer cancer) {
        Map request = new HashMap<String, Object>();
        request.put("input_data", cancer);
        request.put("ensemble", "ensemble/60bffb12e4279b249d00120b");
        return template.postForObject(API, request, Ensemble.class);
    }
}
